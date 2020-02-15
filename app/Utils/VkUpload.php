<?php namespace App\Utils;

class VkUpload {

	private $access_token;
	private $url = "https://api.vk.com/method/";

	public function __construct($access_token) {

		$this->access_token = $access_token;
	}

	/**
	 * Делает запрос к Api VK
	 * @param $method
	 * @param $params
	 */
	public function method($method, $params = null) {

		$p = "";
		if( $params && is_array($params) ) {
			foreach($params as $key => $param) {
				$p .= ($p == "" ? "" : "&") . $key . "=" . urlencode($param);
			}
		}
		$response = file_get_contents($this->url . $method . "?" . ($p ? $p . "&" : "") . "access_token=" . $this->access_token);

		if( $response ) {
			return json_decode($response);
		}
		return false;
	}

	public function uploadImage($file, $caption = '', $group_id = null, $album_id = null) {
		$params = array();
		if( $group_id ) {
			$params['group_id'] = $group_id;
		}
		if( $album_id ) {
			$params['album_id'] = $album_id;
		}

		//Получаем сервер для загрузки изображения
		$response = $this->method("photos.getUploadServer", $params);

		if( isset($response) == false ) {
			print_r($response);
			exit;
		}
		
		$server = $response->response->upload_url;
		
		$postparam = ['file1' => new \CURLFile($file)];
		//Отправляем файл на сервер
		$ch = curl_init($server);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postparam);
		curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: multipart/form-data; charset=UTF-8']);
		$json = json_decode(curl_exec($ch));
		curl_close($ch);

		//Сохраняем файл в альбом
		$saveData = array(
			"server" => $json->server,
			"photos_list" => $json->photos_list,
			"album_id" => $album_id,
			"hash" => $json->hash,
			'gid' => $group_id
		);

		if($caption !== '' || $caption) {
			$saveData['caption'] = $caption;
		}

		$photo = $this->method("photos.save", $saveData);
		

		if( isset($photo->response[0]->id) ) {
			return $photo->response[0]->id;
		} else {
			return false;
		}
	}
}
<?php namespace App\Utils;


class VkResponse {
	public static $object;

	public static function requestBuild(string $method, array $params) {
		if(static::$object === null) {
			return new self();
		}

		return static::$object;
	}

	public function getId(string $vkLink): int {
		if(!$vkLink) return 0;
		
		preg_match('/id([0-9]+)$/', $vkLink, $result);

		return (int)array_get($result, 1);
	}

	public function getTokenFromLink(string $tokenLink): string {
		preg_match('/access_token=([a-z0-9]+)\&/', $tokenLink, $result);
		
		if(empty($result[1]) || !$result[1]) {
			return null;
		}

		return $result[1];
	}

	public function request(string $method, array $params) {
		$url = "https://api.vk.com/method/{$method}?" . $this->implodeParametres($params) . "&v=5.73";
		$context = null;

		if(config('app.proxy_on')) {
			$context = stream_context_create([
				'http' => array(
					'proxy' => 'tcp://' . config('app.proxy'),
					'request_fulluri' => true
				),
				'ssl' => array( 
					'SNI_enabled' => true,
					'SNI_server_name' => parse_url($url, PHP_URL_HOST)
				)
			]);
		}

		$responseResult = file_get_contents($url, false, $context);

		return json_decode($responseResult);
	}

	public function getResponse(string $method, array $params): array {
		$result = $this->request($method, $params);

		if(isset($result->error)) return [];
		if(!isset($result->response)) return [];
		
		return $result->response;
	}

	private function implodeParametres(array $params): string {
		if(!is_array($params)) return '';
		if(!count($params)) return '';

		$queryParams = [];
		foreach($params as $key => $param) {
			$queryParams[] = $key .'='. $param;
		}

		return implode('&', $queryParams);
	}

}
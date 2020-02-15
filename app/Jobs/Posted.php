<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class Posted implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $user = null;
    public $post = null;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user, $post)
    {
        $this->user = $user;
        $this->post = $post;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->attempts() < 5) {
            $vkApi = new \App\Utils\VkResponse;

            $result = $vkApi->request('wall.post', [
                'access_token' => $this->user->access_token,
                'owner_id' => -168366921,
                'message' => $this->post->text,
            ]);
        }
    }
}

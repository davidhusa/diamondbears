/* global $ */

(function() {
	'use strict';

	var $streamButtons = $('.stream-buttons'),
			$playerFrame = $('#player-frame'),
			$chatFrame = $('#chat-frame'),
			TWITCH_PREFIX = 'http://www.twitch.tv/',
			EMBED_SUFFIX = '/embed',
			CHAT_SUFFIX = '/chat?popout=';

	$streamButtons.on('click', 'button', function() {
		var $this = $(this);

		$streamButtons.find('.active').removeClass('active');
		$this.addClass('active');

		$playerFrame.attr('src', TWITCH_PREFIX + $this.data('channel') + EMBED_SUFFIX);
		$chatFrame.attr('src', TWITCH_PREFIX + $this.data('channel') + CHAT_SUFFIX);
	});
})();

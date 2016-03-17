CKEDITOR.addTemplates( 'default',
{
	// The name of the subfolder that contains the preview images of the templates.
	imagesPath : CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),
 
	// Template definitions.
	templates :
		[

			{
				title: 'One third - two thirds column layout',
				image: 't-two-thirds-right.gif',
				description: 'Add a two column layout - left is one third width, right is two thirds width.',
				html:
					'<div class="row">' +
						'<div class="one-third-left">' +
							'<p>Write some text here</p>' +
						'</div>' +
						'<div class="two-thirds-right">' +
							'<p>This column expands two thirds of the page</p>' +
						'</div>' +
					'</div>' +
					'<p class="spacer" style="display:block; margin:0;">&nbsp;</p>'
			},

			{
				title: 'Two thirds - one third column layout',
				image: 't-two-thirds-left.gif',
				description: 'Add a two column layout - left is two thirds width, right is one thirds width.',
				html:
					'<div class="row">' +
						'<div class="two-thirds-left">' +
							'<p>This colum expands two thirds of the page</p>' +
						'</div>' +
						'<div class="one-third-right">' +
							'<p>Whilst this one expands one third of the page</p>' +
						'</div>' +
					'</div>' +
					'<p class="spacer" style="display:block; margin:0;">&nbsp;</p>'
			},

			{
				title: 'Two column layout',
				image: 'two-col.gif',
				description: 'Add a two equally distributed column layout.',
				html:
					'<div class="row">' +
						'<div class="col-2">' +
							'<p>This template has two equally distributed columns</p>' +
						'</div>' +
						'<div class="col-2">' +
							'<p>You can write some text here</p>' +
						'</div>' +
					'</div>' +
					'<p class="spacer" style="display:block; margin:0;">&nbsp;</p>'
			},

			{
				title: 'Three column layout',
				image: 'three-col.gif',
				description: 'Add a three equally distributed column layout.',
				html:
					'<div class="row">' +
						'<div class="col-3">' +
							'<p>This template has three equally dsitributed columns across the page</p>' +
						'</div>' +
						'<div class="col-3">' +
							'<p>This template has three equally dsitributed columns across the page</p>' +
						'</div>' +
						'<div class="col-3">' +
							'<p>This template has three equally dsitributed columns across the page</p>' +
						'</div>' +
					'</div>' +
					'<p class="spacer" style="display:block; margin:0;">&nbsp;</p>'
			},			

			{
				title: 'Lightbox gallery (3 images per row)',
				image: 'lightbox-3.gif',
				description: 'Lightbox gallery with 3 images per row. Right click on place holder image to change the thumbnail image and large image link.',
				html:
					'<div class="row">' +
						'<div class="col-3">' +
							'<figure class="gallery">' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
						'<div class="col-3">' +
							'<figure class="gallery">' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
						'<div class="col-3">' +
							'<figure class="gallery">' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
					'</div>' +
					'<p class="spacer" style="display:block; margin:0;">&nbsp;</p>'
			},

			{
				title: 'Add Photo Albums which link to individual galleries',
				image: 'lightbox-4.gif',
				description: 'Lightbox gallery with 4 images per row. Right click on place holder image to change the thumbnail image and large image link.',
				html:
					'<div class="row">' +
						'<div class="col-4">' +
							'<figure>' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
						'<div class="col-4">' +
							'<figure>' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
						'<div class="col-4">' +
							'<figure>' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
						'<div class="col-4">' +
							'<figure>' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
					'</div>' +
					'<p class="spacer" style="display:block; margin:0;">&nbsp;</p>'
			},			

			{
				title: 'Lightbox gallery (4 images per row)',
				image: 'lightbox-4.gif',
				description: 'Lightbox gallery with 4 images per row. Right click on place holder image to change the thumbnail image and large image link.',
				html:
					'<div class="row">' +
						'<div class="col-4">' +
							'<figure class="gallery">' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
						'<div class="col-4">' +
							'<figure class="gallery">' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
						'<div class="col-4">' +
							'<figure class="gallery">' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
						'<div class="col-4">' +
							'<figure class="gallery">' +
								'<a href="http://www.sitewizard.co.uk/images/placeholder-large.gif" rel="lightbox[a]"><img src="http://www.sitewizard.co.uk/images/placeholder-thumb.gif"/></a>' +
								'<figcaption>Caption Goes Here...</figcaption>' +
							'</figure>' +
						'</div>' +
					'</div>' +
					'<p class="spacer" style="display:block; margin:0;">&nbsp;</p>'
			}		

		]
});
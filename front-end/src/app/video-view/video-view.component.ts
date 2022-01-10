import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent {
  @Input() src?: string;
  embed = '';
  visible = false;

  constructor(private sanitizer: DomSanitizer) {}

  getEmbedUrl() {
    if (this.src) {
      this.embed = this.src.split('=')[1]
      this.visible = true;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.embed);
  }
}

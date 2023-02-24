import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentSource } from 'src/app/types/content-source';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements OnInit {
  constructor(private sanitizer:DomSanitizer) { }
  @Input()
  sourceData!: ContentSource;
  ngOnInit(): void {
  }
  getUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${this.sourceData.video_url}/?controls=1&enablejsapi=1&modestbranding=1&showinfo=0`)
  }
}

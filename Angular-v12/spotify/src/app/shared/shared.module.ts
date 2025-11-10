import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { UserInfoComponent } from './components/user-info/user-info.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    UserInfoComponent
  ]
})
export class SharedModule { }

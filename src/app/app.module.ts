import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { TranslatePictoComponent } from './components/translate-picto/translate-picto.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IvyCarouselModule} from "angular-responsive-carousel";
import {MatInputModule} from "@angular/material/input";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {MatGridListModule} from "@angular/material/grid-list";
import { DialogMaxWordsComponent } from './components/dialog-max-words/dialog-max-words.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LayoutComponent } from './components/layout/layout.component';
import {MatListModule} from "@angular/material/list";
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import {ColorPickerModule} from "ngx-color-picker";
import {MatSelectModule} from "@angular/material/select";
import { SelectPictoComponent } from './components/select-picto/select-picto.component';
import {AppRoutingModule} from "./app-routing.module";
import { VersionComponent } from './components/version/version.component';
import { PostEditionComponent } from './components/post_edition/post-edition.component';
import { PostEditionHomeComponent } from './components/post_edition_home/post-edition-home.component';
import { PostEditionExitComponent } from './components/post_edition_exit/post-edition-exit.component';
import {AnnotVocabComponent} from './components/annot_vocab/annot_vocab.component';
import {EvalHomeComponent} from './components/eval_home/eval_home.component';
import {EvalComponent} from './components/eval/eval.component';
import {EvalExitComponent} from "./components/eval_exit/eval_exit.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SpeechToPictoComponent } from './components/speech-to-picto/speech-to-picto.component';
import { AudioTextFileComponent } from './components/audio-text-file/audio-text-file.component';
import {NgxDropzoneModule} from "ngx-dropzone";
import {DemoHomeComponent} from "./components/demo_home/demo_home.component";
import {TextToPictoComponent} from "./components/text-to-picto/text-to-picto.component";
import { NgImageSliderModule } from 'ng-image-slider';
import {NgOptimizedImage} from "@angular/common";
import {Eval_demosComponent} from "./components/eval_demos/eval_demos.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TranslatePictoComponent,
    DialogMaxWordsComponent,
    LayoutComponent,
    SelectPictoComponent,
    VersionComponent,
    PostEditionComponent,
    PostEditionHomeComponent,
    PostEditionExitComponent,
    AnnotVocabComponent,
    EvalHomeComponent,
    EvalComponent,
    EvalExitComponent,
    AdminComponent,
    LoginComponent,
    LoadingComponent,
    SpeechToPictoComponent,
    AudioTextFileComponent,
    DemoHomeComponent,
    TextToPictoComponent,
    Eval_demosComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    IvyCarouselModule,
    NgImageSliderModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    MatListModule,
    MatRadioModule,
    MatExpansionModule,
    ColorPickerModule,
    MatSelectModule,
    AppRoutingModule,
    DragDropModule,
    MatProgressBarModule,
    NgxDropzoneModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

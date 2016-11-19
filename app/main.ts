/**
 * Created by bimal on 11/5/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic' ;
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
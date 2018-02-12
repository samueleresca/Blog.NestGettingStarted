import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {LabelsController} from './Controllers/LabelsController';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DependencyInstaller} from './Infrastructure/DependencyInstaller';
import {Label} from "./Models/Label";

@Module({
    imports: [TypeOrmModule.forRoot(),
              TypeOrmModule.forFeature([Label])],
    controllers: [AppController, LabelsController],
    components: DependencyInstaller.Installers,

})

export class ApplicationModule {
}

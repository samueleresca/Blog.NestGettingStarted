import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {LabelsController} from './Controllers/LabelsController';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DependencyInstaller} from './Infrastructure/DependencyInstaller';

@Module({
    imports: [TypeOrmModule.forRoot()],
    controllers: [AppController, LabelsController],
    components: DependencyInstaller.Installers,

})

export class ApplicationModule {
}

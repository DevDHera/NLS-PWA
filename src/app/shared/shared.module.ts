// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// external module
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// bootstrap module
import { BootstrapModule } from './bootstrap.module';

// components
import { TextInputComponent } from './component/form/text-input/text-input.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgScrollbarModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        BootstrapModule,
    ],
    declarations: [TextInputComponent],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TextInputComponent,
        NgScrollbarModule,
        CalendarModule,
        BootstrapModule,
    ],
})
export class SharedModule {}

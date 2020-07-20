import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabViewModule } from 'primeng/tabview';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';
import { ProductDataService } from './services/product-data.service';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ExportService } from './services/export.service';
import { MegaMenuModule } from 'primeng/megamenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [TranslatePipe],
  exports: [
    TranslatePipe,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    // PrimeNG
    BrowserAnimationsModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    TableModule,
    CalendarModule,
    TooltipModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputMaskModule,
    DynamicDialogModule,
    BreadcrumbModule,
    CheckboxModule,
    SliderModule,
    AutoCompleteModule,
    TabViewModule,
    PanelMenuModule,
    MegaMenuModule,
    RadioButtonModule,
    CardModule,
  ],
  providers: [TranslateService, ExportService, ProductDataService],
})
export class SharedModule {}

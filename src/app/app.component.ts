import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NotyUtil } from './shared/utils/noty.util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'VK Ads';

    public ngOnInit() {
        $(document).find('[name="errors[]"]').each((i, errorElement) => {
            const errorElementValue = $(errorElement).val();

            NotyUtil.error(String(errorElementValue));
        });

        $(document).find('[name="successes[]"]').each((i, successElement) => {
            const successElementValue = $(successElement).val();

            NotyUtil.success(String(successElementValue));
        });
    }
}

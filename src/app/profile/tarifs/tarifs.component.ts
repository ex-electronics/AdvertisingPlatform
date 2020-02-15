import { Component, OnInit } from '@angular/core';

import { TarifService } from '../../shared/serivces/tarif.service';
import { NotyUtil } from '../../shared/utils/noty.util';

@Component({
    templateUrl: 'tarifs.html'
})

export class TarifsComponent implements OnInit {
    public list: any[] = null;

    constructor(
        private tarifService: TarifService
    ) {

    }

    public ngOnInit() {
        this.tarifService.getList().then((page) => {
            this.list = page;
        });
    }

    public buy(event: any, id: number) {
        this.tarifService.buy({
            id: id,
            promocode: $('[name="promocode"]').val(),
        }).then((response) => {
            NotyUtil.success(response.success);
        });
    }
}

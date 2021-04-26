import { Component, OnInit } from '@angular/core';
import { MaskCard } from 'src/app/model/mask-card';
import { MaskService } from 'src/app/service/mask.service';

@Component({
  selector: 'app-mask-list',
  templateUrl: './mask-list.component.html',
  styleUrls: ['./mask-list.component.scss']
})
export class MaskListComponent implements OnInit {

   maskCard: MaskCard = new MaskCard;
   cards = this.maskService.getAllMaskCard();

  constructor(
    private maskService: MaskService
  ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output ,EventEmitter, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit{

  constructor() { }
  @Input() productNameDetail;
  @Input() productPriceDetail;
  @Input() quantityDetail;
  @Output()onStock=new EventEmitter<{product:string,stockValue:string}>();
  quantity
  emitEventStock(productName,value){
    this.onStock.emit({
      product:productName,
      stockValue:value
    });
  }
 
  ngOnInit(): void {
    
  }
 

}

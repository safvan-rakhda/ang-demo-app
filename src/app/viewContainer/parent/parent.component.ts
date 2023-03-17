import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ComponentRef,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'demo-app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild('childcontainer', { read: ViewContainerRef, static: true })
  childcontainer!: ViewContainerRef;
  childContainerInstace: ChildComponent = new ChildComponent();

  ngOnInit(): void {
    this.childContainerInstace =
      this.childcontainer.createComponent(ChildComponent).instance;
  }

  toggleChildSwitch() {
    const oldValue = this.childContainerInstace?.isSwithON;
    this.childContainerInstace.isSwithON = !oldValue;
  }
}

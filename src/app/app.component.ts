import { Component , ViewContainerRef,ComponentFactoryResolver} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title= ' Lazy Loading Components ';
  constructor (private viewConatiner:ViewContainerRef,
    private cfr: ComponentFactoryResolver){}
    async loadAdmin()
    {
        this.viewConatiner.clear();
        const {AdminlistComponent} = await import('./adminlist/adminlist.component')
        this.viewConatiner.createComponent(
          this.cfr.resolveComponentFactory(AdminlistComponent)
        )
    }
    async loaduser()
    {
      this.viewConatiner.clear();
        const {UserlistComponent} = await import('./userlist/userlist.component')
        this.viewConatiner.createComponent(
          this.cfr.resolveComponentFactory(UserlistComponent)
        )

    }
}

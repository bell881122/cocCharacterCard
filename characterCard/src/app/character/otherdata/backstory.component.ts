import { Component } from '@angular/core';

@Component({
    selector: 'backstory',
    templateUrl: 'backstory.component.html',
    styles: [`
    textarea{
        resize: none;
    }
    `]
})

export class BackstoryComponent {
    title = 'backstory';

    backstorys = [
        { id: "personalDescription", name: "個人描述", value: "" },
        { id: "traits", name: "特質", value: "" },
        { id: "ideologyBeliefs", name: "意識形態/信念", value: "" },
        { id: "injuriesScars", name: "傷與疤", value: "" },
        { id: "significentPeople", name: "重要之人", value: "" },
        { id: "phobiasManias", name: "恐懼症與狂熱症", value: "" },
        { id: "meaningfulLocations", name: "意義之地", value: "" },
        { id: "arcaneTomesSpellsArtifacts", name: "奧秘典籍、咒文與器物", value: "" },
        { id: "treasuredPossessions", name: "珍重之物", value: "" },
        { id: "encountersWithStrangeEntities", name: "遭遇怪異實體", value: "" },
    ];

    backstorysData = [];

    saveBackstorys() {
        for (let i = 0; i < this.backstorys.length; i++) {
            // let a = document.querySelector('#' + this.backstorys[i].id);
            this.backstorysData[i] = this.backstorys[i].value;
        }
        let data = { "backstorys": this.backstorysData };
        localStorage.setItem('backstorys', JSON.stringify(data));
    }

    getBackstorys() {
        let data = JSON.parse(localStorage.getItem('backstorys'));
        this.backstorysData = data.backstorys;
        for (let i = 0; i < this.backstorys.length; i++) {
            this.backstorys[i].value = this.backstorysData[i];
        }
    }

}
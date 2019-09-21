import { Injectable } from '@angular/core';
import { StatusItemService } from '../characteristics/statusItem.service';

@Injectable()

export class SkillsService {

    nativeLanguage;
    dodge;

    constructor(private statusItemService: StatusItemService) {
        this.getStatusItemService();
    }

    getStatusItemService() {
        this.nativeLanguage = this.statusItemService.getItems()[5].value;
        this.dodge = this.statusItemService.getItems()[1].value;
    }

    getSkills() {
        return [

            { skillName: "	會計	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	人類學	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	鑑定	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	考古學	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	藝術 / 工藝_____	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	藝術 / 工藝_____	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	藝術 / 工藝_____	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	魅力	", value: 15, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	攀爬	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	信用評級	", value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	克蘇魯神話	", value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	偽裝	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	閃避	", value: Math.ceil(this.dodge / 2), carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	開車	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	電器維修	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	話術	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	戰鬥（鬥毆）	", value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	戰鬥_____	", value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	戰鬥_____	", value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	火器（手槍）	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	火器（步槍/霰彈槍）	", value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	火器_____	", value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	急救	", value: 30, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	歷史	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	威脅	", value: 15, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	跳躍	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	語言_____	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	語言_____	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	語言_____	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	母語	", value: this.nativeLanguage, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	法律	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	圖書館使用	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	聆聽	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	鎖匠	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	機械維修	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	醫藥	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	自然世界	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	導航	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	神秘學	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	操作重機	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	說服	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	駕駛_____	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	心理學	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	精神分析	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	騎術	", value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	科學_____	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	科學_____	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	科學_____	", value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	巧手	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	識破	", value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	隱匿	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	生存_____	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	游泳	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	投擲	", value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	追蹤	", value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },



        ]
    }
}
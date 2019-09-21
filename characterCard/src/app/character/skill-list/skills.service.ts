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

            { skillName: "	會計	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	人類學	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	鑑定	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	考古學	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	藝術 / 工藝_____	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	藝術 / 工藝_____	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	藝術 / 工藝_____	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	魅力	", basicValue: 15, value: 15, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	攀爬	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	信用評級	", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	克蘇魯神話	", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	偽裝	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	閃避	", basicValue: Math.ceil(this.dodge / 2), value: Math.ceil(this.dodge / 2), carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	開車	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	電器維修	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	話術	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	戰鬥（鬥毆）	", basicValue: 25, value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	戰鬥_____	", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	戰鬥_____	", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	火器（手槍）	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	火器（步槍/霰彈槍）	", basicValue: 25, value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	火器_____	", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	急救	", basicValue: 30, value: 30, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	歷史	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	威脅	", basicValue: 15, value: 15, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	跳躍	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	語言_____	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	語言_____	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	語言_____	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	母語	", basicValue: this.nativeLanguage, value: this.nativeLanguage, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	法律	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	圖書館使用	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	聆聽	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	鎖匠	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	機械維修	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	醫藥	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	自然世界	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	導航	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	神秘學	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	操作重機	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	說服	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	駕駛_____	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	心理學	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	精神分析	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	騎術	", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	科學_____	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	科學_____	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	科學_____	", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	巧手	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	識破	", basicValue: 25, value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	隱匿	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	生存_____	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	游泳	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	投擲	", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillName: "	追蹤	", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },


        ]
    }
}
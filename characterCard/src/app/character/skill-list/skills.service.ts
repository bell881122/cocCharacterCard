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

            { skillId: "accounting", skillName: "會計", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "anthropology", skillName: "人類學", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "appraise", skillName: "鑑定", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "archaeology", skillName: "考古學", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "art_craft", skillName: "藝術 / 工藝_____", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "art_craft", skillName: "藝術 / 工藝_____", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "art_craft", skillName: "藝術 / 工藝_____", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "charm", skillName: "魅力", basicValue: 15, value: 15, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "climb", skillName: "攀爬", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "credit_rating", skillName: "信用評級", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "cthulhu_mythos", skillName: "克蘇魯神話", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "disguise", skillName: "偽裝", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "dodge", skillName: "閃避(half DEX)", basicValue: Math.ceil(this.dodge / 2), value: Math.ceil(this.dodge / 2), carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "drive_auto", skillName: "開車", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "elec_repair", skillName: "電器維修", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "fast_talk", skillName: "話術", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "fighting_brawl", skillName: "戰鬥（鬥毆）", basicValue: 25, value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "fighting", skillName: "戰鬥_____", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "fighting", skillName: "戰鬥_____", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "firearms_handgun", skillName: "火器（手槍）", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "firearms_rifle_shotgun", skillName: "火器（步槍/霰彈槍）", basicValue: 25, value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "firearms", skillName: "火器_____", basicValue: 0, value: 0, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "first_aid", skillName: "急救", basicValue: 30, value: 30, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "history", skillName: "歷史", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "intimidate", skillName: "威脅", basicValue: 15, value: 15, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "jump", skillName: "跳躍", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "language", skillName: "語言_____", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "language", skillName: "語言_____", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "language", skillName: "語言_____", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "language_own", skillName: "母語(EDU)", basicValue: this.nativeLanguage, value: this.nativeLanguage, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "law", skillName: "法律", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "library_use", skillName: "圖書館使用", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "listen", skillName: "聆聽", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "locksmith", skillName: "鎖匠", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "mech_repair", skillName: "機械維修", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "medicine", skillName: "醫藥", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "natural_world", skillName: "自然世界", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "navigate", skillName: "導航", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "occult", skillName: "神秘學", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "op_hv_machine", skillName: "操作重機", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "persuade", skillName: "說服", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "pilot", skillName: "駕駛_____", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "psychology", skillName: "心理學", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "psychoanalysis", skillName: "精神分析", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "ride", skillName: "騎術", basicValue: 5, value: 5, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "science", skillName: "科學_____", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "science", skillName: "科學_____", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "science", skillName: "科學_____", basicValue: 1, value: 1, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "sleight_of_hand", skillName: "巧手", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "spot_hidden", skillName: "識破", basicValue: 25, value: 25, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "stealth", skillName: "隱匿", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "suvival", skillName: "生存_____", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "swim", skillName: "游泳", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "throw", skillName: "投擲", basicValue: 20, value: 20, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
            { skillId: "trach", skillName: "追蹤", basicValue: 10, value: 10, carrerChecked: false, hobbyChecked: false, carrerValue: 0, hobbyValue: 0 },
        ]
    }
}
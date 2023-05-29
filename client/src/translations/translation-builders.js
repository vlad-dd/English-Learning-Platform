
export class WelcomePageLanguageTranslationBuilder {
    constructor(welcome_page_title, active_users_count, platform_goal_title,
        goal_card_body, card_up_to_date_title, up_to_date_card_body,
        platform_structure_title, welcome_page_step_1, welcome_page_step_2, welcome_page_step_3, welcome_page_step_4,
        description_step_one, description_step_two, description_step_three, description_step_four,
        steps_guideline_title, welcome_page_feedbacks, welcome_page_feedback_1) {
        this.welcome_page_title = welcome_page_title;
        this.active_users_count = active_users_count;
        this.platform_goal_title = platform_goal_title;
        this.goal_card_body = goal_card_body;
        this.card_up_to_date_title = card_up_to_date_title;
        this.up_to_date_card_body = up_to_date_card_body;
        this.platform_structure_title = platform_structure_title;
        this.welcome_page_step_1 = welcome_page_step_1;
        this.welcome_page_step_2 = welcome_page_step_2;
        this.welcome_page_step_3 = welcome_page_step_3;
        this.welcome_page_step_4 = welcome_page_step_4;
        this.description_step_one = description_step_one;
        this.description_step_two = description_step_two;
        this.description_step_three = description_step_three;
        this.steps_guideline_title = steps_guideline_title;
        this.description_step_four = description_step_four;
        this.welcome_page_feedbacks = welcome_page_feedbacks;
        this.welcome_page_feedback_1 = welcome_page_feedback_1;
    };
};

export class BuildAllTranslationPages {
    constructor(welcome_page, key) {
        this.key = key;
        this.welcome_page = welcome_page;
    };
    buildTranslationObject() {
        return {
            [this.key]: {
                ...this.welcome_page
            }
        }
    };
};

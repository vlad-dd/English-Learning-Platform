
export const REPORT_SERVICE_MODAL_DATA_TEST_ID = "report-service-modal";
export const REPORT_SERVICE_ICON_DATA_TEST_ID = "report-service-icon";
export const SEND_REPORT_FORM_DATA_TEST_ID = "send-report-form";
export const SEND_REPORT_SELECT_REASON_DATA_TEST_ID = "send-report-select-reason";
export const SEND_REPORT_TEXTAREA_DATA_TEST_ID = "send-report-textarea";
export const SEND_REPORT_MAX_LENGTH_GATE_DATA_TEST_ID  = "send-report-max-length-gate";
export const SEND_REPORT_MIN_LENGTH_GATE_DATA_TEST_ID  = "send-report-min-length-gate";
export const SEND_REPORT_SUBMIT_BUTTON_DATA_TEST_ID = "send-report-submit";

export const TOOLTIP_TITLE = "Report about the Problem";

const ELP_APPLICATIONS = [
    {label: 'Tenses', value: 'tenses'},
    {label: 'Grammar-Levels', value: 'grammar-Levels'},
    {label: 'Dictionary', value: 'dictionary'},
    {label: 'Tests', value: 'tests'},
    {label: 'Releases', value: 'releases'},
];

const MIN_TEXT_AREA_LENGTH = 10;
const MAX_TEXT_AREA_LENGTH = 250;

const REPORT_FORM_LABELS = {
    FOUND_IN: 'Was found in',
    DESCRIPTION: 'Description'
};

export { 
    ELP_APPLICATIONS, 
    REPORT_FORM_LABELS,
    MIN_TEXT_AREA_LENGTH,
    MAX_TEXT_AREA_LENGTH
};

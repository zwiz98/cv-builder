import GenerallInfoForm from "./forms/GenerallInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";

export const steps: {
    title: string;
    component: React.ComponentType;
    key: string;
}[] =[
    {title:"General info",component: GenerallInfoForm, key:"general-info"},
     {title:"Personal info",component: PersonalInfoForm, key:"personal-info"},
]
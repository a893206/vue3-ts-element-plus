import { reactive } from "vue";

interface User {
  email: string;
  password: string;
}

interface Rules {
  email: {
    type: string;
    required: boolean;
    message: string;
    trigger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
  )[];
}

export const loginUser = reactive<User>({
  email: "",
  password: "",
});

// 校验规则
export const rules = reactive<Rules>({
  email: [
    {
      type: "email",
      required: true,
      message: "Email is incorrect...",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Password could not be empty...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "Password's length has to be 6 to 30 characters...",
      trigger: "blur",
    },
  ],
});

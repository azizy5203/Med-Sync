import TextField from "@/components/forms/TextField";
import * as yup from "yup";
import Form from "@/components/forms/Form";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth";

const schema = yup.object({
  username: yup.string().required().label("username"),
  password: yup.string().required().label("password"),
});

function Login() {
  const dispatch = useDispatch();

  async function userLogin(values) {
    console.log("DD");
    dispatch(login(values));

    // toast("Toasted");
    // console.log({ ...values });
  }

  return (
    <div className="md:border-s md:border-primary h-full flex justify-center items-center">
      <div className="border-2 border-primary rounded-sm w-1/2 ">
        <h1 className="leading-0 text-4xl text-center">Login</h1>

        <div>
          <Form
            schema={schema}
            onSubmit={userLogin}>
            <TextField
              name="username"
              label="Username"
            />
            <TextField
              name="password"
              label="Password"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

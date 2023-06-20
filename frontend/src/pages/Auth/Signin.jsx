import { Container, Card, Input, Button, Text , Spacer, Link} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container
      align="center"
      justify="center"
      style={{ display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
         }}
      fluid
    >
      <Card shadow style={{
        maxWidth:"50%",
        padding:"1rem"
      }}>
      <Text h2 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%",pl:"2rem"}} weight="bold">
        Fill login details ...
        </Text>
        <form onSubmit={handleSubmit}>
        <Spacer y={1.5} />
          <Input
            bordered 
            labelPlaceholder="username" 
            color="secondary"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Spacer y={1.5} />
          <Input
            bordered 
            labelPlaceholder="password" 
            color="secondary"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" auto css={{m:'1rem'}}>
            Login
          </Button>
        </form>
        <Link block color="secondary" onClick={()=>{navigate("/signup")}}>
        Don't have  an account?
      </Link>
      </Card>
    </Container>
  );
};

export default SignUpForm;

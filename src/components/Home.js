import React, { useState, useEffect } from "react";
import Products from './Products'
import UserService from "../services/user.service";
import HeroImage from "./Home/HeroImage/heroimage"
import { Container } from '@material-ui/core'
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {/* <h3>{content}</h3> */}
        <HeroImage />
        <Container maxWidth="lg">
          <Products />
        </Container>
      </header>
    </div>
  );
};

export default Home;
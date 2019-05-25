import React from "react";
import { MutationFn } from "react-apollo";
import { Link } from "react-router-dom";
import styled from "../../typed-components";
import { toggleDriving } from "../../types/api";

const Container = styled.div`
  height: 100%;
`;

const Header = styled.div`
  background-color: black;
  height: 20%;
  margin-bottom: 30px;
  padding: 0 15px;
  color: white;
`;

const SLink = styled(Link)`
  font-size: 22px;
  display: block;
  margin-left: 15px;
  margin-bottom: 25px;
  font-wight: 400;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  background-color: grey;
  border-radius: 40px;
  overflow: hidden;
`;

const Name = styled.h2`
  font-size: 22px;
  color: white;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Rating = styled.h5`
  font-size: 18px;
  color: white;
`;

const Text = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  height: 100%;
  align-items: center;
`;

interface IToggleProps {
  isDriving: boolean;
}

const ToggleDriving = styled<IToggleProps, any>("button")`
  -webkit-appearance: none;
  background-color: ${props =>
    props.isDriving ? props.theme.yellowColor : props.theme.greenColor};
  width: 100%;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 15px 0px;
  cursor: pointer;
`;

interface IProps {
  data?: any;
  loading: boolean;
  toggleDrivingFn: MutationFn<toggleDriving>;
}

const MenuPresenter: React.SFC<IProps> = ({
  data,
  loading,
  toggleDrivingFn
}) => (
  <Container>
    {!loading && data.GetMyProfile.user && data.GetMyProfile.user.fullName && (
      <React.Fragment>
        <Header>
          <Grid>
            <Link to={"/edit-account"}>
              <Image
                src={
                  data.GetMyProfile.user.profilePhoto ||
                  "https://scontent-hkg3-1.cdninstagram.com/vp/44feeff1e47aa5bc7e6ba65ab834223b/5D64ACE9/t51.2885-19/s320x320/30590335_177641379716272_435837733416468480_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com"
                }
              />
            </Link>
            <Text>
              <Name>{data.GetMyProfile.user.fullName}</Name>
              <Rating>4.5</Rating>
            </Text>
          </Grid>
        </Header>
        <SLink to="/trips">Your Deliveries</SLink>
        <SLink to="/settings">Settings</SLink>
        <ToggleDriving
          onClick={toggleDrivingFn}
          isDriving={data.GetMyProfile.user.isDriving}
        >
          {data.GetMyProfile.user.isDriving ? "Stop delying" : "Start delying"}
        </ToggleDriving>
      </React.Fragment>
    )}
  </Container>
);

export default MenuPresenter;
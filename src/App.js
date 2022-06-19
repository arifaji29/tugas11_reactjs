import React from 'react';

import { Grid, Form, Feed, Button, Header, Comment, Divider, Segment, Input, Search, Container, Icon, Dimmer, Label, Loader, Image, Placeholder, List, Table, Menu } from "semantic-ui-react";

function App() {
  return (
    <>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Container textAlign='center'>
              <Icon name='search' size='huge' />
              <h3>Cari Dokumen</h3>
              <Search placeholder='Search...' />
            </Container>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Container textAlign='center'>
              <Icon name='file pdf' size='huge' />
              <h3>Tambah Document Baru</h3>
              <Button primary>Create Document</Button>
            </Container>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column columns={2} >
          <List>
            <List.Item>
              <List.Header>
                Website Terkait
              </List.Header>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.google.com'>Google</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Facebook.com'>Facebook</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.semantic-ui.com'>semantic ui</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.niomic.id'>Niomic</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Reactjs.org'>React</a>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>



    </>
  );
}

export default App;

import React from 'react';
import Container from 'components/Container';
import { Wrapper, Link } from './Atoms';

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <ul>
          <li>
            <Link href="https://google.com">Google</Link>
          </li>
          <li>
            <Link href="https://facebook.com">Facebook</Link>
          </li>
          <li>
            <Link href="https://twitter.com">Twitter</Link>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
}

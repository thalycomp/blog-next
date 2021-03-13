import React from 'react';
import Link from 'next/link';

import { 
  ListPost,
  ItemPost,
 } from './styles';

function CardsPosts() {
  return (
    <ListPost>
        <ItemPost>
          <Link href="/post">
            <a>
              <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
              <h3>Esse post contem ironia Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </a>
          </Link>
        </ItemPost>
        <ItemPost>
          <Link href="/">
            <a>
              <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
              <h3>Esse post contem ironia Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </a>
          </Link>
        </ItemPost>
        <ItemPost>
          <Link href="/">
            <a>
              <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
              <h3>Esse post contem ironia Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </a>
          </Link>
        </ItemPost>
        <ItemPost>
          <Link href="/">
            <a>
              <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
              <h3>Esse post contem ironia Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            </a>
          </Link>
        </ItemPost>
    </ListPost>
  );
}

export default CardsPosts;
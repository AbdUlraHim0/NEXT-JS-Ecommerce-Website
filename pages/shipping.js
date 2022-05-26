import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../context/Store';

export default function Shipping() {
  const router = useRouter();
  router.push('/login');
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }

  return <div>Shipping page</div>
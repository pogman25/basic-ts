import * as React from 'react';
import { IUserStack } from '../containers/interfaces';

const Stack: React.SFC<{ stack: IUserStack[] }> = ({ stack }) => {
  return <ul>{stack.map(s => (<li key={s.id}><p>{`${s.stack} - ${s.points}%`}</p></li>))}</ul>
};

export default Stack;

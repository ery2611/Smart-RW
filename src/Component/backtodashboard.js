import * as React from 'react';
import { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BackDashboard() {
  const [selected, setSelected] = useState('');

  const handleLinkClick = (event, linkName) => {
    event.preventDefault();
    setSelected(linkName);
    console.info(`You clicked the ${linkName} link.`);
  };

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          onClick={(event) => handleLinkClick(event, 'Dashboard')}
          style={{ fontWeight: selected === 'Dashboard' ? 'bold' : 'normal' }}
        >
          Dashboard
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={(event) => handleLinkClick(event, 'Notifikasi')}
          style={{ fontWeight: selected === 'Notifikasi' ? 'bold' : 'normal' }}
        >
          Notifikasi
        </Link>
      </Breadcrumbs>
    </div>
  );
}

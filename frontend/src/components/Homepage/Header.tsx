"use client"

import styles from '../../styles/NavBar.module.css'

import React, { useState, MouseEvent } from 'react';

import TeamLogo from "./TeamLogo";
import { useRouter } from 'next/navigation';
import Link from 'next/link';


import { AppBar, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Stack, Box, Popover, List, ListItem, ListItemText  } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';







const pages: {label: string, menu: Array<string>}[] = [
  {label: 'News', menu: ['Latest', 'Men', 'Women', 'Academy', 'Features']}, 
  {label:'Teams', menu: ['Men', 'DivisionOne', 'Under21' ,'Women', 'Academy']}, 
  {label: 'Fixtures', menu: ['Men',  'DivisionOne', 'Under21', 'Women', 'Academy']}, 
  {label: 'Gallery', menu: []}, 
  {label: 'Shop', menu: []}, 
  {label: 'About Us', menu: []}, 
  {label: 'Contact Us', menu: []}, 
  {label:'Partners', menu:[]} 
]


const Header = () => {

  const router = useRouter()


  // Start of variables and functions for naigations for cellphones etc
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElSubNav, setAnchorElSubNav] = useState<null | HTMLElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);




  const pageNavigate = (page_item: string) =>{

    switch(page_item){

      case 'Gallery':
        router.push('/gallery')
        break;
      
      case 'Shop':
        router.push('/shop')
        break;
      
      case 'About Us':
        router.push('/aboutus')
        break;
      
      case 'Contact Us':
        router.push('/contactus')
        break;

      case 'Sponsors':
        router.push('/sponsors')
        break;
    }


  }
 
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

    // Sub nav addition
    setAnchorElSubNav(null);
    setOpenSubMenu(null);
  };
 


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMouseOver = (event: MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  // Sub navigation for smaller devices

  const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>, label: string) => {
    setAnchorElSubNav(event.currentTarget);
    setOpenSubMenu(label);
  };


  const routes = {
    Teams: {
      Men: '/players/men',
      DivisionOne: '/players/divisionone',
      Under21: '/players/under21',
      Women: '/players/women',
      Academy: '/players/academy',
    },
    News: {
      Latest: '/news/latest',
      Men: '/news/men',
      Women: '/news/women',
      Academy: '/news/academy',
      Features: '/news/features',
    },
    Fixtures: {
      Men: '/fixtures/men',
      DivisionOne: '/fixtures/divisionone',
      Under21: '/fixtures/under21',
      Women: '/fixtures/women',
      Academy: '/fixtures/academy',
    },
  };


  // const linkHref = routes[page.label]?.[menuItem] || '';


  
  
  return (

    <Box >

      <AppBar 
      position="sticky" 
      sx={{margin: 'auto', minWidth: {sm: 600 ,md: 900, lg: 1260}, maxWidth:{sm: 899 ,md: 1199, lg: 1280}}}>

        <Container sx={{padding: 0}}>
          <Toolbar disableGutters sx={{ display: {md: 'flex'}, justifyContent: {md:'center'}}}>

            {/* Responsiveness for Larger Devices */}
            <Stack direction='column' justifyContent='center' display={{xs: 'none', sm: 'inherit'}}>

              <Link href='/'>
                <Box padding={0} display='flex' justifyContent='center'>
                  <TeamLogo width={180} height={150} />
                </Box>
              </Link>


              <Stack direction='row' spacing={4}>

              {pages.map((page) => (

                <div key={page.label}>
                  <Button
                    aria-controls={openMenu === page.label ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onMouseOver={(event) => handleMouseOver(event, page.label)}
                    onClick={handleClose} // To close the menu on click
                    color="inherit"
                    className={styles.container}
                  >
                      {page.label === 'Gallery' || page.label === 'Shop' ||page.label === 'About Us' || page.label === 'Contact Us' || page.label === 'Sponsors' ? (
                      
                      <Link href={`/${page.label}`} style={{ textDecoration: 'none', color: 'white'}}>
                        
                        <Typography>
                          {page.label}
                        </Typography>
                  
                  
                      </Link>
                  
                    ): (<Typography>{page.label}</Typography>)}
                  </Button>

                  {page.menu.length > 0 && (
                    
                    <Menu
                      id="menu-list-grow"
                      anchorEl={anchorEl}
                      keepMounted
                      open={openMenu === page.label}
                      onClose={handleClose}
                      MenuListProps={{
                        onMouseLeave: handleClose,
                      }}
                    >
                      {page.menu.map((menuItem) => (
                        
                        <MenuItem key={menuItem} onClick={handleClose} sx={{ marginTop: 1}}>
                          <Typography variant='caption' fontSize={18} sx={{ fontWeight: 'semi-bold'}}>  

                            <Link href={routes[page.label]?.[menuItem] || ''}
                            style={{ textDecoration: 'none'}}>
                              {menuItem}

                            </Link>        
                          </Typography>
                        </MenuItem>

                      ))}
                    </Menu>
                  )}
                </div>
              ))}

                  

              </Stack>

            </Stack>

            {/* Responsiveness for smartphones and smaller devices */}
            <Stack width='100%' direction='row' justifyContent='space-between' alignItems='center' display={{xs: 'inherit', md: 'none'}} >

              <Box paddingLeft={1}>
                
                <Link href={`/`}>
                  <TeamLogo width={90} height={40} />
                </Link>

                  {/* <TeamLogo width={90} height={40} /> */}

              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    sx={{ font: 200}}
                  >
                    <MenuIcon sx={{ fontSize: '36px'}} />
                </IconButton>
      
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {/* {pages.map((page, idx) => (
                      <MenuItem key={idx} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    ))} */}


                    {pages.map((page, idx) => (
                      <div key={idx}>
                        
                        <MenuItem onClick={(event) => handleOpenSubMenu(event, page.label)}>


                          
                          {page.label === 'Gallery' || page.label === 'Shop' ||page.label === 'About Us' || page.label === 'Contact Us' || page.label === 'Sponsors' ? (
                      
                            <Link href={`/${page.label}`} style={{ textDecoration: 'none', color: 'black'}}>
                                <Typography textAlign="center">{page.label}</Typography>
                            </Link>
                        
                            ): (<Typography textAlign="center">{page.label}</Typography>)} 
                          
                          {page.menu.length > 0 && <KeyboardArrowRightIcon />}
                        </MenuItem>

                        {page.menu.length > 0 && (
                          <Menu
                            id="sub-menu"
                            anchorEl={anchorElSubNav}
                            open={openSubMenu === page.label}
                            onClose={handleCloseNavMenu}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                          >
                            {page.menu.map((menuItem, idx) => (
                              <MenuItem key={idx} onClick={handleCloseNavMenu}>
                                
                                <Typography textAlign="center">

                                  {/* {menuItem} */}

                                  <Link href={routes[page.label]?.[menuItem] || ''}                         >
                                    {menuItem}
                                  </Link>    

                                </Typography>
                              </MenuItem>
                            ))}
                          </Menu>
                        )}
                      </div>
                    ))}
                    



                  </Menu>
              </Box>

            </Stack>

          </Toolbar>

        </Container>
      </AppBar>

    </Box>
  );
}

export default Header;
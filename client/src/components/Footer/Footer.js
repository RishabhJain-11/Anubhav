import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import img from '../../images/anubhav.png'

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
}));


export default function Footer(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: { img }, width: 110 },
    'copy': 'Made with 💖 by Rishabh Jain',
    'link1': 'About Me',
    'link2': 'Github',
    'link3': 'LinkedIn',
    'link4': 'Resume',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={content.brand.image} alt="" width={content.brand.width} />;
  } else {
    brand = content.brand.text || 'Rishabh Jain';
  }

  const brandContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white', // You can set the desired text color
    fontWeight: 'bold',
  };

  const logoStyle = {
    height: '45px',
    marginRight: '10px',
    borderRadius: '10px'
  };


  return (
    <footer>
      <Container maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          {/* <Link
            href="#"
            color="inherit"
            underline="none"
            style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
          >
            <img src={img} alt="" />
            Anubhav अनुभव
          </Link> */}
          <Link to="/" style={brandContainerStyle}>
            <img src={img} alt="icon" style={logoStyle} />
            Anubhav अनुभव
          </Link>
          <Box component="nav" className={`${classes.footerNav} ${classes.centerNav}`}>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
          <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography>
        </Box>
      </Container>
    </footer>

  );
}
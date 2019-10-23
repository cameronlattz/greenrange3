import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "300px",
        backgroundImage: "url(https://images.unsplash.com/photo-1556710807-81aa7ea511f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2283&q=80)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontSize: "40px",
    },
    container: {
        marginTop: "4%"
    },
    recipeName: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: "30px"
    },
    background: {
        backgroundImage: "url(https://www.bbcgoodfood.com/sites/default/files/dinner-party-table2-500_0.jpg)"
    },
    recipeLink: {
        fontSize: "20px"
    },
    weekdays: {
        backgroundColor: "rgb(159,65,152)",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",

    }
}));

export default function CurrentRecipes() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.title}>This weeks dinners</Paper>
            </Grid>
            <Container className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item sm={3}>
                        <Paper className={classes.weekdays}>Monday</Paper>
                    </Grid>
                    <Grid item sm={9}>
                        <Grid item sm={3}>
                            <img src="https://www.bbcgoodfood.com/sites/default/files/dinner-party-table2-500_0.jpg" alt="Chicken!"></img>
                        </Grid>
                        <Grid item sm={12}>
                            <Paper className={classes.recipeName}>Chicken Cacciatore<br></br>
                                <Link className={classes.recipeLink} href="https://www.bonappetit.com/recipe/chicken-cacciatore">Recipe instructions here</Link>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.weekdays}>Tuesday</Paper>
                    </Grid>
                    <Grid item sm={9}>
                        <Paper className={classes.recipeName}>Chicken Cacciatore</Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.weekdays}>Wednesday</Paper>
                    </Grid>
                    <Grid item sm={9}>
                        <Paper className={classes.recipeName}>Chicken Cacciatore</Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.weekdays}>Thursday</Paper>
                    </Grid>
                    <Grid item sm={9}>
                        <Paper className={classes.recipeName}>Chicken Cacciatore</Paper>
                    </Grid>
                    <Grid item sm={3}>
                        <Paper className={classes.weekdays}>Friday</Paper>
                    </Grid>
                    <Grid item sm={9}>
                        <Paper className={classes.recipeName}>Chicken Cacciatore</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
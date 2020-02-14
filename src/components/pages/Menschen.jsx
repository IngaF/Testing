import React, { Component } from 'react';
import Header from '../../components/Header'
import Content from '../../components/Content'
import Content2 from '../../components/Content2'
import Map from '../../components/Map'
import Highlight from '../../components/Highlight'
import Zugangsdichte from '../../components/charts/Zugangsdichte'
import LivingOnline from '../../components/charts/LivingOnline'
import Nutzungsgründe from '../../components/charts/Nutzungsgründe'
import IKTBeschäftigung from '../../components/charts/IKTBeschäftigung'
import '../../styles/content.css';

export default function Menschen() {

    return(
    <div className="Wrap1">
        <div className="placeholder1"></div>
        <div className="placeholder2"></div>
        <div className="placeholder3"></div>
        <Highlight überschrift="At vero eos et accusam" text="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."></Highlight>
        
        <Header überschrift1="Digitale Wirtschaft" 
                überschrift2="und Gesellschaft"
                boldText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
                normalText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum."
                
                mapchart={
                <Map></Map>
                }
        ></Header>
        <Content überschrift="Zugangsdichte"
                 text=" At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                 no sea takimata sanctus est Lorem <b>ipsum dolor</b> sit amet. At vero eos et accusam et justo duo dolores et ea rebum.
                 At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  
                 <b> Lorem ipsum</b> dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum."
                 highlightNumber="25%"
                 erklärungsText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum."
        ></Content>
        <Content2 chart={
            <Zugangsdichte></Zugangsdichte>
                } chart2={
            <LivingOnline/>
                 } chart3={
            <Nutzungsgründe/>
                 } chart4 ={
            <IKTBeschäftigung></IKTBeschäftigung>
                }

        >
        </Content2>
        </div>


);
    }
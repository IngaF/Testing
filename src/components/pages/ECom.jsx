import React, { Component } from 'react';
import Header from '../../components/Header'
import Content from '../../components/Content'
import Content2 from '../../components/Content2'
import Highlight from '../../components/Highlight'
import '../../styles/App.css';
export default function ECom() {

    return (
            <div className="Wrap1">
                <div className="placeholder1"></div>
                <div className="placeholder2"></div>
                <div className="placeholder3"></div>
                <Highlight überschrift="EComm" text="ECOM"></Highlight>
                <Header überschrift1="ECommerce" 
                        überschrift2="und Gesellschaft"
                        boldText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
                        normalText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum."
                ></Header>
                <Content überschrift="ECommerce"
                         text=" At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                         no sea takimata sanctus est Lorem <b>ipsum dolor</b> sit amet. At vero eos et accusam et justo duo dolores et ea rebum.
                         At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  
                         <b> Lorem ipsum</b> dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum."
                         highlightNumber="86%"
                         erklärungsText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum."
                ></Content>
                <Content2>
                  
                </Content2>
                </div>
                    
                    
        );
    }
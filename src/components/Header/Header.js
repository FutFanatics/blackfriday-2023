import React, {Component } from 'react';
import $ from 'jquery';

import Menu_Desk from "./Menu/Menu_Desk";

import logo from "../../img/icon/futfanatics.svg";
import logo2 from "../../img/icon/futfanaticscyber.svg";
import iconUser from '../../img/icon/iconuser.svg';
import iconcart from '../../img/icon/iconcart.svg';
import iconinternacional from "../../img/icon/internacional.svg";
import menu from "../../img/icon/hamburguer.svg";
import  { useState, useEffect } from 'react';

import '../../assets/css/style.css';
import Menu_Mobile from './Menu/Menu_Mobile';



class Header extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            logoImage: "https://beta.futfanatics.com.br/blackfriday-2023/img/icon/futfanatics.svg", 
            CartImage:"https://beta.futfanatics.com.br/blackfriday-2023/img/icon/iconcart.svg",
            InternacionalImage:"https://beta.futfanatics.com.br/blackfriday-2023/img/icon/internacional.svg",
            UserImage:"https://beta.futfanatics.com.br/blackfriday-2023/img/icon/iconuser.svg",
        };
    }
    
    componentDidMount = () => {
        this.checkLogoDate();
            
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = document.cookie;
            var ca = decodedCookie.split(';');

            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) == 0) {
                    return decodeURIComponent(c.substring(name.length, c.length));
                }
            }
            return "";
        }

        $.fn.cart = function () {
            var self = this,
            cartSession = getCookie('cartSession');

            self.add = function (productId, quantity, variantId, callback) {
                var self = this;

                $.ajax({
                    method: "POST",
                    url: "https://www.futfanatics.com.br/web_api/cart/",
                    contentType: "application/json; charset=utf-8",
                    crossDomain: true,
                    data: '{"Cart":{"session_id":"' + cartSession + '","product_id":"' + productId + '","quantity":"' + quantity + '","variant_id":"' + variantId + '"}}'
                }).done(function (response, textStatus, jqXHR) {

                    $('.cart-note').removeClass('d-none');

                    setTimeout(function () {
                        $('.cart-note').addClass('d-none');
                    }, 5000);

                    self.load();

                    if (callback && typeof callback == "function") {
                        callback(response);
                    }
                }).fail(function (jqXHR, status, errorThrown) {
                    var response = $.parseJSON(jqXHR.responseText);
                    console.error("[cart.js] - add error: ", response);
                    if (callback && typeof callback == "function")
                        callback(null);
                });
            };
            self.load = function () {
                $.ajax({
                    method: "GET",
                    crossDomain: true,
                    url: "https://www.futfanatics.com.br/web_api/cart/" + cartSession
                }).done(function (response, textStatus, jqXHR) {
                    var qtde_itens = 0;

                    response.forEach(function (item) {
                        var cart = item.Cart;

                        qtde_itens += parseInt(cart.quantity);
                    });

                    changeQty(qtde_itens);
                }).fail(function (jqXHR, status, errorThrown) {
                    var response = $.parseJSON(jqXHR.responseText);
                    if (response.name = "Nenhum registro encontrado") {
                        changeQty(0);
                    } else {
                        console.error("[cart.js] - load error: ", response);
                    }
                });
            };
            function changeQty(qty) {
                var cartQty = self.find(".qnty");
                console.log()
                cartQty.text(qty);
                if (qty > 0) {
                    cartQty.addClass("has-items");
                } else {
                    cartQty.removeClass("has-items");
                }
            }
            return self;
        };

        setTimeout(function () {
            window.Cart = $(".c-cart-header").cart();
            window.Cart.load();

            setSkin();

            console.log("[cart.js] - init");
        }, 200);

        var lastScrollTop = 0;

        $(window).scroll(function(event){
            var st = $(this).scrollTop();
            var hgHeader = $('header').height();
            var hgHeaderNav = $('header .header-nav').height();
            var hgBannerTop = $('body > .banner-top-site').height();
            var hgInfoDanger = $('body > .infobox.danger').height();

            if (!isMobile()) {
                if (st > (getNotNaN(hgHeader) - getNotNaN(hgHeaderNav)  + getNotNaN(hgBannerTop) + getNotNaN(hgInfoDanger) ) ) {
                    $('header .header-nav').css({'position': 'absolute', 'width': '100%', 'z-index': '-1'});
                    $('.custom-page.page-black').css({'margin-top': '53px'});

                    if (st > lastScrollTop) {
                        $('header .header-nav').css({'top': '0'});
                    } else {
                        $('header .header-nav').css({'top': '100%'});
                    }
                } else {
                    $('header .header-nav').css({'position': 'relative', 'width': 'auto', 'z-index': '0'});
                    $('.custom-page.page-black').css({'margin-top': '0'});
                }
            } else {
                if (st > ((getNotNaN(hgHeader) + getNotNaN(hgBannerTop)  + getNotNaN(hgInfoDanger) ) ) ) {
                    $('.header-infos .busca').css({'position': 'absolute', 'width': '100%'});
                    $('.custom-page.page-black').css({'margin-top': '43px'});

                    if (st > lastScrollTop) {
                        $('.header-infos .busca').stop(true).slideUp(0);
                        $('.links-usuario .search').removeClass('invisible');
                    } else {
                        $('.header-infos .busca').stop(true).slideDown(0);
                        $('.links-usuario .search').addClass('invisible');
                    }
                } else {
                    $('.header-infos .busca').css({'position': 'relative', 'width': 'auto'});
                    $('.custom-page.page-black').css({'margin-top': '0'});
                }
            }
            lastScrollTop = st;
        });

        $('.header-infos .links-usuario .search a').on('click', function() {
            $('.header-infos .busca').stop(true).slideToggle();
            return false;
        });

        $('header .menu-mob-open').on('click', function() {
            $('body').addClass('menu-open');
            $('.header-nav').css('left', '0');
        });

        $('header .menu-mob-close').on('click', function() {
            $('body').removeClass('menu-open');
            $('.header-nav').css('left', '-100%');
        });

        if (isMobile()) {
            $('.header-nav a').on('click', function(event) {
                var href = $(this).attr('href');
                if (href == "") {
                    $(this).parents('ul').scrollTop(0);
                    $(this).siblings('ul').show();
                    $(this).parents('ul').css('overflow-y', 'hidden');
                    $('.header-nav .nav-top a.link-user').removeClass('invisible');
                    // $('.header-nav .nav-top a.link-inter').addClass('d-none');
                    return false;
                }
            });

            $('.header-nav li.back').on('click', function(event) {
                $(this).parent().hide().parents('ul').css('overflow-y', 'auto');
                if ($(this).parents('ul').length < 3) {
                    $('.header-nav .nav-top a.link-user').addClass('invisible');
                    // $('.header-nav .nav-top a.link-inter').removeClass('d-none');
                }
            });
        }

        $(document).on('click', function(event) {
            if (!$(event.target).is('.cart-header *') && !$('.cart-header .menu-cart').hasClass('d-none')) {
                $('.cart-header > a').trigger('click');
            }

            if (!$(event.target).is('.central *') && !$('.central .menu-central').hasClass('d-none')) {
                $('.central > a').trigger('click');
            }
        });

        $(document).scroll(function() {
            if (!$('.cart-header .menu-cart').hasClass('d-none')) {
                $('.cart-header > a').trigger('click');
            }

            if (!$('.central .menu-central').hasClass('d-none')) {
                $('.central > a').trigger('click');
            }
        });

        var ff_app_cookie = 'ff_app';
        var ff_app_cookie_value = 'Banner App';
        var ff_app_cookie_domain = "futfanatics.com.br";

        function getNotNaN($dom) {
            if (!isNaN($dom))
                return $dom;
            else
                return 0;
        }

        function setSkin() {
            setTimeout(() => {
              document.body.style.backgroundColor = "#000";
              const divs = Array.from(document.querySelectorAll(".chaordic"));
              divs.map((div) => {
                const hasChildren = div.childNodes;
                const widget =
                  div &&
                  div.childNodes &&
                  div.childNodes[0] &&
                  div.childNodes[0].contentDocument &&
                  div.childNodes[0].contentDocument.querySelector("#widget");
                if (widget) {
                  widget.classList.add("skin-bf");
                }
              });
            }, 10);
          }

        function isMobile() {
            if (window.innerWidth > 991) {
                return false;
            }
            return true;
        }

        function setCookie(cname, cvalue, exdays, domain) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=." + domain;
        }

        function getCookie(cname) {
            var name = cname + "=";
            // var decodedCookie = decodeURIComponent(document.cookie);
            var decodedCookie = document.cookie;
            var ca = decodedCookie.split(';');

            // var filterCookies = cookies.filter(function(e) {
            // 	return e.trim().indexOf(name) == 0;
            // });

            // return filterCookies[0] ? decodeURIComponent(filterCookies[0].substring(name.length, c.length)) : "";

            for(var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                // while (c.charAt(0) == ' ') {
                // 	c = c.substring(1);
                // }
                if (c.indexOf(name) == 0) {
                    return decodeURIComponent(c.substring(name.length, c.length));
                }
            }
            return "";
        }

        function checkCookie(cname) {
            var cookie = getCookie(cname);
            if (cookie != "") {
                return cookie;
            } else {
                return "";
            }
        }
    }

    checkLogoDate = () => {
        const currentDate = new Date();
        const logoChangeDate = new Date('2023-10-30'); 
        if (currentDate >= logoChangeDate) {
            
            this.setState({
                logoImage:"https://beta.futfanatics.com.br/blackfriday-2023/img/icon/futfanaticscyber.svg", 
                CartImage:"https://beta.futfanatics.com.br/blackfriday-2023/img/icon/icon-cartcyber.svg",
                InternacionalImage:"https://beta.futfanatics.com.br/blackfriday-2023/img/icon/internacionalcyber.svg",
                UserImage:"https://beta.futfanatics.com.br/blackfriday-2023/img/icon/iconusercyber.svg",
            });
            $('.header-top').addClass('cyber');
        }
    }
    
    render(){
        return (
            <header>
                <div className="header-top">
                    <div className="header-infos">
                        <div className="container-fluid">
                            <div className="row py-1 py-md-3 align-items-center">
                                <div className="col-4 d-lg-none">
                                    <button className="menu-mob-open icon-menu"><img className="icon-menu d-md-none" src={menu}/></button>
                                </div>
                                <div className="col-4 col-lg-1 d-flex justify-content-center justify-content-lg-start">
                                    <a href="https://futfanatics.com.br" className="logo">
                                        <img className="icon-logo-fut" src={this.state.logoImage}/>
                                    </a>
                                </div>
                                <div className="col-12 order-last col-lg-8 order-lg-0 position-relative">
                                    <div className="busca">
                                        <form action="https://busca.futfanatics.com.br/busca" className="d-flex align-items-center">
                                            <input type="hidden" name="loja" value="{{ store.id }}" />

                                            <button type="submit" className="order-last order-lg-0"><i className="icon-search"></i></button>

                                            <input id="search-field" type="text" name="q" placeholder="O que você procura?" />
                                        </form>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-3 d-flex justify-content-between links-usuario">
                                    <div className="link-inter align-self-center">
                                        <a href="https://www.futfanatics.net/?utm_source=futfanatics-nacional&utm_medium=referral&utm_campaign=selo-topo" target="_blank" className="d-none d-lg-flex align-items-center"><img className="icon-link-inter" src={this.state.InternacionalImage}/>International Orders</a>
                                    </div>
                                    <div className="c-central">
                                        <a href="https://futfanatics.com.br/central-do-cliente" className="d-none d-md-block"><img className="icon-user" src={this.state.UserImage}/></a>
                                    </div>
                                    <div className="search d-lg-none invisible">
                                        <a href=""><i className="icon-search"></i></a>
                                    </div>
                                    <div className="c-cart-header">
                                        <span className="qnty">0</span>
                                        <a href="https://futfanatics.com.br/loja/carrinho.php?loja=311840"><img className="icon-cart" src={this.state.CartImage}/></a>

                                        <div className="cart-note d-none">
                                            <h3>Carrinho Atualizado</h3>
                                            <a href="https://www.futfanatics.com.br/loja/carrinho.php?loja=311840">Finalizar compra</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-nav">
                        <Menu_Desk/>
                        <Menu_Mobile/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;





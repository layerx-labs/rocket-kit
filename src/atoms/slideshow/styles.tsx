import styled from 'styled-components';
import { rem } from 'polished';
import { device } from '../../ions/breakpoints';
import { colors } from '../../ions/variables';

interface SlideshowProps {
  slidesNumber: number;
}

export const Wrapper = styled.div<SlideshowProps>`
  position: relative;

  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    -webkit-transition: all 0.25s ease-in;
    -moz-transition: all 0.25s ease-in;
    -ms-transition: all 0.25s ease-in;
    -o-transition: all 0.25s ease-in;
    transition: all 0.25s ease-in;
    opacity: 0.4;
    filter: alpha(opacity=40);
    position: absolute;
    z-index: 2;
    top: ${rem('20px')};
    background: none;
    border: 0;
    font-size: ${rem('32px')};
    cursor: pointer;
  }

  .carousel .control-arrow:hover {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    margin: 0 ${rem('5px')};
    display: inline-block;
    border-top: ${rem('8px')} solid transparent;
    border-bottom: ${rem('8px')} solid transparent;
    content: '';
  }

  .carousel .control-disabled.control-arrow {
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: inherit;
    display: none;
  }

  .carousel .control-prev.control-arrow {
    left: 0;
  }

  .carousel .control-prev.control-arrow:before {
    border-right: ${rem('8px')} solid ${colors.white};
  }

  .carousel .control-next.control-arrow {
    right: 0;
  }

  .carousel .control-next.control-arrow:before {
    border-left: ${rem('8px')} solid ${colors.white};
  }

  .carousel-root {
    outline: none;
  }

  .carousel {
    position: relative;
    width: 100%;
  }

  .carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none;
  }

  .carousel .carousel {
    position: relative;
  }

  .carousel .control-arrow {
    outline: 0;
    border: 0;
    background: none;
    top: 50%;
    margin-top: ${rem('-13px')};
    font-size: ${rem('18px')};
  }

  .carousel .thumbs-wrapper {
    margin: ${rem('20px')};
    overflow: hidden;
  }

  .carousel .thumbs {
    -webkit-transition: all 0.15s ease-in;
    -moz-transition: all 0.15s ease-in;
    -ms-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    position: relative;
    list-style: none;
    white-space: nowrap;
  }

  .carousel .thumb {
    -webkit-transition: border 0.15s ease-in;
    -moz-transition: border 0.15s ease-in;
    -ms-transition: border 0.15s ease-in;
    -o-transition: border 0.15s ease-in;
    transition: border 0.15s ease-in;
    display: inline-block;
    margin-right: ${rem('6px')};
    white-space: nowrap;
    overflow: hidden;
    border: ${rem('3px')} solid ${colors.white};
    padding: ${rem('2px')};
  }

  .carousel .thumb:focus {
    border: ${rem('3px')} solid #ccc;
    outline: none;
  }

  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: ${rem('3px')} solid #333;
  }

  .carousel .thumb img {
    vertical-align: top;
  }

  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden;
  }

  .carousel.carousel-slider .control-arrow {
    top: 0;
    color: ${colors.white};
    font-size: ${rem('26px')};
    bottom: 0;
    margin-top: 0;
    padding: ${rem('5px')};
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    -webkit-transition: height 0.15s ease-in;
    -moz-transition: height 0.15s ease-in;
    -ms-transition: height 0.15s ease-in;
    -o-transition: height 0.15s ease-in;
    transition: height 0.15s ease-in;
  }

  .carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }

  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column;
  }

  .carousel .slider-wrapper.axis-vertical {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }

  .carousel .slider-wrapper.axis-vertical .slider {
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%;
  }

  .carousel .slider.animated {
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }

  .carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
    background: #000;
  }

  .carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0;
  }

  .carousel .carousel-status {
    position: absolute;
    top: 0;
    right: 0;
    padding: ${rem('5px')};
    font-size: ${rem('10px')};
    text-shadow: ${rem('1px')} ${rem('1px')} ${rem('1px')} rgba(0, 0, 0, 0.9);
    color: ${colors.white};
  }

  > div > div > button {
    position: absolute;
    left: ${rem('30px')};
    bottom: ${rem('30px')};
    opacity: 0.25;
    z-index: 2;
    transition-duration: 0.3s;

    svg {
      width: ${rem('36px')};
      height: ${rem('36px')};
      fill: ${colors.white};
    }

    &.next {
      margin-left: ${rem('46px')};
    }

    &:hover {
      opacity: 1;

      svg {
        fill: ${colors.white};
      }
    }

    @media ${device.m} {
      left: 3.5vw;
    }
  }

  .control-dots {
    position: absolute;
    right: ${rem('30px')};
    bottom: ${rem('42px')} !important;
    margin: 0 !important;
    width: initial !important;
    height: ${rem('15px')};
    display: ${props => (props.slidesNumber > 1 ? 'inherit' : 'none')};
    padding: 0;
    text-align: center;
    z-index: 1;

    li {
      position: relative;
      display: inline-block;
      border-radius: 999px;
      background-color: ${colors.white};
      width: ${rem('15px')};
      height: ${rem('15px')};
      opacity: 0.25;
      transition-duration: 0.3s;
      cursor: pointer;

      button {
        position: absolute;
        left: 0;
        border: 0;
        border-radius: 999px;
        background-color: transparent;
        width: ${rem('15px')};
        height: ${rem('15px')};
        cursor: pointer;
      }

      &.selected {
        width: ${rem('30px')};
        opacity: 1;
      }

      &:hover {
        opacity: 1;
      }

      &:not(:last-child) {
        margin-right: ${rem('5px')};
      }
    }

    @media ${device.m} {
      right: 3.5vw;
    }
  }
`;

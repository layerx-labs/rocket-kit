import styled from "styled-components";
import { device } from '../../ions/breakpoints';
import { colors } from '../../ions/variables';

const { light } = colors;

interface SlideshowProps {
  slidesNumber: number,
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
    top: 20px;
    background: none;
    border: 0;
    font-size: 32px;
    cursor: pointer;
  }

  .carousel .control-arrow:hover {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .carousel .control-arrow:before,
  .carousel.carousel-slider .control-arrow:before {
    margin: 0 5px;
    display: inline-block;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    content: "";
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
    border-right: 8px solid #fff;
  }

  .carousel .control-next.control-arrow {
    right: 0;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #fff;
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
    margin-top: -13px;
    font-size: 18px;
  }

  .carousel .thumbs-wrapper {
    margin: 20px;
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
    margin-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    border: 3px solid #fff;
    padding: 2px;
  }

  .carousel .thumb:focus {
    border: 3px solid #ccc;
    outline: none;
  }

  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 3px solid #333;
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
    color: #fff;
    font-size: 26px;
    bottom: 0;
    margin-top: 0;
    padding: 5px;
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
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    color: #fff;
  }

  > div > div > button {
    position: absolute;
    left: 30px;
    bottom: 30px;
    opacity: 0.25;
    z-index: 2;
    transition-duration: 0.3s;

    svg {
      width: 36px;
      height: 36px;
      fill: ${light};
    }

    &.next {
      margin-left: 46px;
    }

    &:hover {
      opacity: 1;

      svg {
        fill: ${light};
      }
    }

    @media ${device.m} {
      left: 3.5vw;
    }
  }

  .control-dots {
    position: absolute;
    right: 30px;
    bottom: 42px !important;
    margin: 0 !important;
    width: initial !important;
    height: 15px;
    display: ${props => (props.slidesNumber > 1 ? "inherit" : "none")};
    padding: 0;
    text-align: center;
    z-index: 1;

    li {
      display: inline-block;
      border-radius: 999px;
      background-color: ${light};
      width: 15px;
      height: 15px;
      opacity: 0.25;
      transition-duration: .3s;
      cursor: pointer;

      &.selected {
        width: 30px;
        opacity: 1;
      }

      &:hover {
        opacity: 1;
      }

      &:not(:last-child) {
        margin-right: 5px;
      }
    }

    @media ${device.m} {
      right: 3.5vw;
    }
  }
`;
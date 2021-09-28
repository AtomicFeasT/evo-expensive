import styled, { css } from 'styled-components';

const hide = css`
  @keyframes hide {
    0% {
      opacity: 1;
      z-index: 1;
    }

    99% {
      opacity: 0;
    }

    100% {
      z-index: -1;
    }
  }
`;

const show = css`
  @keyframes show {
    0% {
      z-index: 1;
    }

    1% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;

  &.show {
    ${show}
    animation: show 0.25s ease;
  }

  &.hide {
    ${hide}
    animation: hide 0.25s ease;
    z-index: -1;
  }

  .dropdown__bg {
    position: absolute;
  }

  .dropdown__bg {
    /* z-index: -1; */
    background: ${props => props.theme.color.gray[700]};
    opacity: 0;
    position: absolute;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.25s ease;
  }

  .dropdown__bg-bottom {
    background-color: ${props => props.theme.color.gray[900]};
    position: absolute;
    width: 100%;
    left: 0;
    top: 300px;
    height: 700px;
    transition: 0.3s ease;
  }

  .dropdown__wrap {
    overflow: hidden;
    position: absolute;
    transition: 0.25s ease;
    z-index: 1;
  }

  .dropdown-menu__content {
    position: absolute;
    opacity: 0;
    transition: 0.25s ease;
    min-width: 200px;
  }

  .dropdown-menu.active .dropdown-menu__content {
    opacity: 1;
  }

  .top-section,
  .bottom-section {
    z-index: 50;
    padding: 2rem;
  }

  .bottom-section {
    width: 100%;
  }

  /* 
  ============ INFO DROPDOWN ============
*/
  #info .dropdown-menu__content {
    width: 640px;
  }

  #developer .dropdown-menu__content {
    width: 400px;
  }

  #info .dropdown-menu__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #info .top-section {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #info .bottom-section {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme.color.gray[100]};
  }

  #info .bottom-section button {
    color: ${props => props.theme.color.gray[100]};
    background: ${props => props.theme.color.accent[200]};
  }

  #info .bottom-section button:hover {
    background: ${props => props.theme.color.accent[300]};
  }

  #info .card {
    width: 100%;
    display: grid;

    grid-template-areas:
      'img title'
      'img description';
    grid-template-columns: min-content auto;
    grid-template-rows: min-content;
    row-gap: 1rem;
  }

  #info .card h2 {
    font-size: clamp(0.6rem, 2vw, 0.8rem);
  }

  #info .card img {
    width: clamp(0.8rem, 5vw, 50px);
    height: auto;

    padding: 0.6rem;
    border-radius: 0.4rem;
    border: 1px solid ${props => props.theme.color.gray[200]};
    background: ${props => props.theme.color.gray[700]};
    grid-area: img;
  }

  #info .card h1 {
    grid-area: title;
  }

  #info .card ul {
    flex-direction: column;
    grid-area: description;
  }

  #info .card ul li {
    width: 100%;
    text-align: left;
  }
`;

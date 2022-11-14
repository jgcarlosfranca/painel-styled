import styled from "styled-components";

export const StyledTableResponsiveConteiner = styled.div`
  display: flex;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 11px;
  margin-top: 15px;

  @media (max-width: 1600px) {
    padding: 2rem 0;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.text};
  font-size: 15px;

  @media (max-width: 768px) {
    width: 90%;
  }

  td,
  th {
    padding: 0.75rem;
    vertical-align: top;
    color: ${(props) => props.theme.colors.text};
    input {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.contrastBackgroud};
      .checked {
        background-color: ${(props) => props.theme.colors.primaryButtonColor};
      }
    }
  }

  td {
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
      fill: ${(props) => props.theme.colors.tables?.updateIcons};
      &:hover {
        transition: transform 1s;
      }
      &:active {
        transition: transform 0.3s;
        transform: scale(0.5);
      }
    }
  }

  tbody td {
    justify-content: space-between;
    border-left: ${(props) => props.theme.colors.tables?.borderTd};
    border-right: ${(props) => props.theme.colors.tables?.borderTd};
    border-bottom: ${(props) => props.theme.colors.tables?.borderTd};
    input {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.contrastBackgroud};
      .checked {
        background-color: ${(props) => props.theme.colors.primaryButtonColor};
      }
      svg {
        color: ${(props) => props.theme.colors.tables?.updateIcons};
        fill: ${(props) => props.theme.colors.tables?.updateIcons};
      }
    }
  }

  thead th {
    background-color: ${(props) => props.theme.colors.contrastBackgroud};
    vertical-align: bottom;
    border-left: ${(props) => props.theme.colors.tables?.borderTd};
    border-right: ${(props) => props.theme.colors.tables?.borderTd};
    border-top: ${(props) => props.theme.colors.tables?.borderTd};
    border-bottom: 2px solid #dee2e6;

    :nth-child(1) {
      border-radius: 10px 0 0 0;
    }
    :nth-last-child(1) {
      border-radius: 0 10px 0 0;
    }
  }

  tbody + tbody {
    border-top: 2px solid #dee2e6;
  }
`;

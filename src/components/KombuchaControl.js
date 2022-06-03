import React from "react";
import { v4 as uuidv4 } from 'uuid';

import KombuchaForm from "./KombuchaForm";
import KombuchaList from "./KombuchaList";

const testKombuchas = [
  {
    id: uuidv4(),
    name: "Master Brew Kombucha: Dragon Fruit",
    brand: "Kevita",
    price: 7,
    alcoholContent: 0.03,
    pints: 11
  },
  {
    id: uuidv4(),
    name: "Humm Lemon Ginger",
    brand: "Humm",
    price: 9,
    alcoholContent: 0.02,
    pints: 44
  }
];

export default class KombuchaControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "home",
      editKombucha: null,
      kombuchas: testKombuchas
    };
  }

  addKombucha = (kombucha) => {
    this.setState((state) => {
      return {kombuchas: [...state.kombuchas, {...kombucha}]}
    });
  }

  updateKombucha = (kombucha) => {
    const index = this.state.kombuchas
      .findIndex(e => kombucha.id === e.id);

    if (index !== -1) {
      this.setState(state => {
        const newKombuchas = [...state.kombuchas];

        newKombuchas[index] = {...kombucha};

        return { kombuchas: [...newKombuchas] };
      });
    }
  }

  setEditKombucha = (kombucha) => {
    this.setState(() => ({ editKombucha: kombucha }));
  }

  deleteKombucha = (kombucha) => {
    const index = this.state.kombuchas
      .findIndex(e => kombucha.id === e.id);

    if (index !== -1) {
      this.setState(state => {
        const newKombuchas = [...state.kombuchas];

        newKombuchas.splice(index, 1);

        return { kombuchas: [...newKombuchas] }
      });
    }
  }

  decrementPints = (kombucha) => {
    this.setState(p => {
      return ({
        kombuchas: p.kombuchas.map(e => (e.id === kombucha.id) ? 
          ({ ...e, pints: (kombucha.pints > 0) ? kombucha.pints - 1 : 0 }) : e)
        })
      });
  }

  handleViewChange = (newView) => {
    this.setState(() => ({ view: newView }))
  }

  render() {
    switch (this.state.view) {
      case "new":
      case "edit":
        return ( 
          <KombuchaForm
            kombucha={this.state.view === "edit" ? this.state.editKombucha : undefined}
            onSubmitFunc={this.state.view === "edit" ? this.updateKombucha : this.addKombucha}
            onViewChange={this.handleViewChange}
          />
        )

      case "home":
      default:
        return (
          <KombuchaList
            kombuchas={this.state.kombuchas}
            decrementPints={this.decrementPints}
            onViewChange={this.handleViewChange}
            onSetEditKombucha={this.setEditKombucha}
            onDeleteKombucha={this.deleteKombucha}
          />
        )
    }
  }
}
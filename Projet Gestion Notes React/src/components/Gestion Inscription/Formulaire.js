import { React, useState, useRef } from 'react';
import { Table, Modal, Input } from "antd";
//import "antd/dist/antd.min.css";


import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Button, Select } from "antd";

function Tablee() {
  const [EditingRes, setEditingRes] = useState(null);
  const [Editing, setEditing] = useState(false);
  const niveau = [{ Niveau: "Qualification", id: 1 },
  { Niveau: "Technicien", id: 2 },
  { Niveau: "Technicien Specialiser", id: 3 },
  { Niveau: "Technicien Superieur", id: 4 },
  { Niveau: "Master", id: 5 },
  { Niveau: "Licence", id: 6 },
  ]
  const filier = [{ Filier: "Developpement web", id: 1 },
  { Filier: "Reseau Info", id: 2 },
  { Filier: "Developoment App", id: 3 },
  { Filier: "Cybersecuirité", id: 4 },
  { Filier: "Full Stack", id: 5 },
  { Filier: "System Exploiatation", id: 6 },
  ]


  const [dataSource, setDataSource] = useState([

    {
      id: 1,
      name: 'jhon',
      adress: 'rue sbata',
      lastname: 'sina',
      statut: "inactif",
      niveau: "licence",
      filier: "info",
    },
    {
      id: 2,
      name: 'jorge',
      adress: 'rue spocky',
      lastname: 'sina8',
      statut: "actif",
      niveau: "master",
      filier: "info",
    },
    {
      id: 3,
      name: 'jeene',
      adress: 'rue svtre',
      lastname: 'sina',
      statut: "actif",
      niveau: "technicien",
      filier: "info",
    },

  ]);

  const columns = [
    {
      Key: "1",
      title: "Nom",
      dataIndex: "name"
    },
    {
      Key: "2",
      title: "Prenom",
      dataIndex: "lastname"
    },
    
    {
      Key: "3",
      title: "Adress",
      dataIndex: "adress"
    },
    {
      Key: "4",
      title: "Statut",
      dataIndex: "statut"
    },
    {
      Key: "5",
      title: "Niveau",
      dataIndex: "niveau"
    },
    {
      Key: "6",
      title: "  Filier",
      dataIndex: "filier"
    },

    {
      title: "Actions",
      render: (record) => {
        return <>
          {/* <Button>Edit</Button>
         <Button>Delete</Button>      */}
          <EditOutlined onClick={() => { onEditRes(record) }} style={{ color: "green" }} />
          <DeleteOutlined onClick={() => { onDeleteRes(record) }} style={{ color: "red", marginLeft: 12 }} />
        </>
      }
    },
  ];


  const [selectedFilier, setSelectedFilier] = useState([]);

  const handleSelect = (selectedItems) => {
    setSelectedFilier(selectedItems);
  };

  const handleRemove = (selectedItems) => {
    setSelectedFilier(selectedItems);
  };

  const multiselectRef = useRef(null);
  const NouveauRes = (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const statut = document.getElementById("Selector");
    const lastname = document.getElementById("lastname");
    const adress = document.getElementById("adress");
    const niveauEtud = document.getElementById("selectNiv");
    const filierEtud = document.getElementById("selectfil");
alert(filierEtud.value)
alert(niveauEtud.value)
    if (
      name.value === "" ||
      lastname.value === "" ||
      adress.value === ""
    ) {


      Modal.error({
        title: "Erreur",
        content: "Tous les champs sont obligatoires.",
      });
    } else {
      
      const nouveauRes = {
        name: name.value,
        adress: adress.value,
        lastname: lastname.value,
        statut: statut.value,
        niveau:niveauEtud.value,
        filier: filierEtud.value

      };
      name.value = "";
      lastname.value = "";
      adress.value = "";
      setDataSource((pre) => [...pre, nouveauRes]);
      
     
    }
  };


  const onDeleteRes = (record) => {
    Modal.confirm({
      title: 'vous voulez vraimment de supprimer cet Etudiant ?',
      okText: "Oui",
      okType: "danger",
      onOk: () => {
        setDataSource(pre => { return pre.filter(Responsable => Responsable.id !== record.id) });
      }
    })

  }
  const onEditRes = (record) => {
    setEditing(true);
    setEditingRes({ ...record })

  }
  const ResetEditRes = (record) => {
    setEditing(false);
    setEditingRes(null)
  }

  const [optionNiveau, setNiveau] = useState([{ Niveau: "Qualification", id: 1 },
  { Niveau: "Technicien", id: 2 },
  { Niveau: "Technicien Specialiser", id: 3 },
  { Niveau: "Technicien Superieur", id: 4 },
  { Niveau: "Master", id: 5 },
  { Niveau: "Licence", id: 6 },
  ]);
  const [optionfil, setFilier] = useState([{ Filier: "Developpement web", id: 1 },
  { Filier: "Reseau Info", id: 2 },
  { Filier: "Developoment App", id: 3 },
  { Filier: "Cybersecuirité", id: 4 },
  { Filier: "Full Stack", id: 5 },
  { Filier: "System Exploiatation", id: 6 },
  ]);
  const [selectedniveau, setSelectedNiveau] = useState(null);
  
  const [selectedOptionfilier, setSelectFilier] = useState(null);

  const handleSelectChangeNiveau = (event) => {
    const selectedValue = event.target.value;
    const option = optionNiveau.find((option) => option.value === selectedValue);
    setSelectedNiveau(option);
  };
  const handleSelectChangeFilier = (event) => {
    const selectedValue = event.target.value;
    const option = optionfil.find((option) => option.value === selectedValue);
    setSelectFilier(option);
  };

 

  return (
    <div className="body">

      <Form onSubmit={NouveauRes}
        autoComplete="off"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 9 }}
        onFinish={(values) => {
          console.log({ values });
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item
          name="name"
          label="Nom"
          rules={[
            {
              required: true,
              message: "s'il vous plait entrer le Nom de Responsable",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input className="select" id="name" placeholder="name" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Nom"
          rules={[
            {
              required: true,
              message: "s'il vous plait entrer le Nom de Responsable",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
        <Input className="select" id="lastname" placeholder="lastname" /><br />
        </Form.Item>
        <Form.Item
          name="name"
          label="Nom"
          rules={[
            {
              required: true,
              message: "s'il vous plait entrer le Nom de Responsable",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
        <Input className="select" id="adress" placeholder="adress" />
        </Form.Item>
        <select className="select" id="Selector"> 
        <option>En cours</option>
          <option>Terminer</option>
        </select>
        <br/>
        <select onChange={handleSelectChangeNiveau} id="selectNiv">
          {optionNiveau.map((niveau) => (
            <option key={niveau.id} value={niveau.Niveau}>
              {niveau.Niveau}
            </option>
          ))}
        </select>
       
        <select onChange={handleSelectChangeFilier} id="selectfil">

          {optionfil.map((filier) => (
            <option key={filier.id} value={filier.Filier}>
              {filier.Filier}
            </option>
          ))}
        </select>

        <Button className="button" onClick={NouveauRes} htmlType="submit">Nouveau Responsable</Button>
      </Form>


      <Table className="table" columns={columns} dataSource={dataSource} />

      <Modal title="Modifier Responsable"
        visible={Editing}
        okText="save"
        onCancel={() => {
          ResetEditRes();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((Respo) => {
              if (Respo.id === EditingRes.id) {
                return EditingRes;
              } else {
                return Respo;
              }
            });
          });
          ResetEditRes();
        }}
      >
        <label className="editInput">Nom</label>
        <input className="editInput" value={EditingRes?.name} onChange={(e) => { setEditingRes(pre => { return { ...pre, name: e.target.value } }) }} /> <br />
        <label className="editInput">Prenom</label>
        <input className="editInput" value={EditingRes?.lastname} onChange={(e) => { setEditingRes(pre => { return { ...pre, lastname: e.target.value } }) }} /><br />
        <label className="editInput">Adress</label>
        <input className="editInput" value={EditingRes?.adress} onChange={(e) => { setEditingRes(pre => { return { ...pre, adress: e.target.value } }) }} />
        <label className="editInput">Niveau</label><br />
        <select value={EditingRes?.niveau} onChange={(e) => { setEditingRes(pre => { return { ...pre, niveau: e.target.value } }) }}>
          {optionNiveau.map((niveau) => (
            <option key={niveau.id} value={niveau.Niveau}>
              {niveau.Niveau}
            </option>
          ))}
        </select>
         <label className="editInput">Filier</label><br />
        <select value={EditingRes?.filier} onChange={(e) => { setEditingRes(pre => { return { ...pre, filier: e.target.value } }) }}>
          {optionfil.map((niveau) => (
            <option key={niveau.id} value={niveau.Filier}>
              {niveau.Filier}
            </option>
          ))}
        </select><br/>
        <label className="editInput">Statut</label><br />
        <select className="select" value={EditingRes?.statut} onChange={(e) => { setEditingRes(pre => { return { ...pre, statut: e.target.value } }) }}>
          <option>En cours</option>
          <option>Terminer</option>
        </select>

      </Modal>

    </div>
  );
}

export default Tablee;
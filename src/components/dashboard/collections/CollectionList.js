import React from "react";
import ContainerListItem from "./CollectionListItem";

function CollectionList() {
  const collectionData = [
    {
      path: "jamesplantphotography/collection-1",
      title: "Collection 1",
      author: "James Plant Photography",
      cover: "/img/demo-images/aranprime-7aKfl4fP6tM-unsplash.jpg",
      photos: 10,
      isNew: true,
    },
    {
      path: "jamesplantphotography/birthday-party-2020",
      title: "Birthday Party 2020",
      author: "James Plant Photography",
      cover: "/img/demo-images/hamza-madrid-MD31KAVyZZU-unsplash.jpg",
      photos: 1,
    },
    {
      path: "jamesplantphotography/birthday-party-2020-2",
      title: "Birthday Party 2018",
      author: "James Plant Photography",
      cover: "/img/demo-images/kristaps-ungurs-2oRhNVBH-vs-unsplash.jpg",
      photos: 22,
    },
    {
      path: "jamesplantphotography/some-other-thing",
      title:
        "This is a long collection name, it will probably span a couple of lines",
      author: "James Plant Photography",
      cover: "/img/demo-images/kyle-cleveland-_x4ya1Y6gSw-unsplash.jpg",
      photos: 122,
      isNew: true,
    },
    {
      path: "jamesplantphotography/some-other-thing123",
      title: "Some other collection of stuff",
      cover: "/img/demo-images/mat-napo-ejWJ3a92FEs-unsplash.jpg",
      author: "James Plant Photography",
      photos: 56,
    },
    {
      path: "jamesplantphotography/some-other-thing123456",
      title: "Some other collection of stuff that is weird",
      author: "James Plant Photography",
      photos: 27,
    },
  ];

  const collectionItems = collectionData.map(function (item, index) {
    return (
      <ContainerListItem
        path={item.path}
        title={item.title}
        author={item.author}
        photos={item.photos}
        cover={item.cover ? item.cover : undefined}
        isNew={item.isNew}
        key={item.path ? item.path : index}
      ></ContainerListItem>
    );
  });

  return (
    <div className="flex flex-wrap p-2 md:px-4 -mx-4">{collectionItems}</div>
  );
}

export default CollectionList;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteContact, fetchContacts } from 'redux/contactsApi';
import { Loader } from 'components/Loader';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import {
  List,
  ListItem,
  ContactInfo,
  Name,
  Number,
  DeleteButton,
  Empty,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [contactToDeleteId, setContactToDeleteId] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!visibleContacts?.length && !error & !isLoading) {
    return <Empty>No contacts added yet.</Empty>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactInfo>
            <Name>{name}</Name>
            <Number>{number}</Number>
          </ContactInfo>
          <DeleteButton
            type="button"
            onClick={() => {
              setContactToDeleteId(id);
              dispatch(deleteContact(id)).then(() => {
                setContactToDeleteId(null);
              });
            }}
            disabled={isLoading && contactToDeleteId === id}
          >
            {contactToDeleteId === id && <Loader />}
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;

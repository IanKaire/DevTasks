import { 
  ChatIcon, 
  CheckCircleIcon, 
  EmailIcon, 
  StarIcon, 
  WarningIcon 
} from '@chakra-ui/icons'
import { 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels, 
  TabPanel, 
  List, 
  ListItem, 
  ListIcon 
} from '@chakra-ui/react'

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" variant="enclosed" colorScheme="purple">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
      </TabList>

      <TabPanels py="10px">
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: harry@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Connect with me so that we can collaborate on big projects.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Was named Developer of the Month in the company I work in.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Add header.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Style the login page.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Push the feature branch to GitHub.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Make the navbar reponsive.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Collaborate with the new Junior Developer.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Inform C.T.O of task completion.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}


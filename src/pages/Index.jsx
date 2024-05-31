import { Container, VStack, Heading, Text, Box, Image, HStack, Link, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Breaking News: Market Hits All-Time High",
    description: "The stock market reached an all-time high today, with major indices showing significant gains.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3MTcxNzYyNjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    id: 2,
    title: "Tech Giants Release New Gadgets",
    description: "Leading tech companies have unveiled their latest gadgets in a highly anticipated event.",
    image: "https://images.unsplash.com/photo-1515940175183-6798529cb860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0c3xlbnwwfHx8fDE3MTcxNzYzNjR8MA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    id: 3,
    title: "Health Tips for a Better Life",
    description: "Experts share their top health tips to help you lead a healthier and happier life.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0aXBzfGVufDB8fHx8MTcxNzE3NjI2Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          News Today
        </Heading>
        {articles.map((article) => (
          <Box key={article.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
            <HStack>
              <Image src={article.image} alt={article.title} maxW="200px" />
              <Box p={6}>
                <Heading as="h2" size="lg" mb={2}>
                  {article.title}
                </Heading>
                <Text mb={4}>{article.description}</Text>
                <Link href={article.link} color="teal.500" fontWeight="bold">
                  Read more
                </Link>
              </Box>
            </HStack>
          </Box>
        ))}
        <HStack spacing={4} mt={8}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
